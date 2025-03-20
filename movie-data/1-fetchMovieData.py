import requests
import json
import sys

# Replace with your TMDb API Key
API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjFlYjYzY2QyYjI2YTE3NTk0ZjA1OWI4ZjMzZTExYiIsIm5iZiI6MTc0MjQ5MDg4OC43OTYsInN1YiI6IjY3ZGM0ZDA4Nzg5MWE3NjgyYjdmOWZlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iN_eZP0r_Hc6n8I-vVI2b0IYykuQVu3ssAlBMkm5Mgc"
BASE_URL = "https://api.themoviedb.org/3"
language = "de"

# Number of results needed
MOVIE_COUNT = 1000
TV_COUNT = 1000

# Function to fetch top-rated movies or TV shows
def fetch_tmdb_data(endpoint, count):
    results = []
    page = 1
    
    # Use headers instead of api_key parameter (newer authentication method)
    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json;charset=utf-8"
    }
    
    while len(results) < count:
        url = f"{BASE_URL}/{endpoint}?language={language}&page={page}"
        print(f"Fetching: {url}")
        
        try:
            response = requests.get(url, headers=headers)
            response.raise_for_status()  # Raise exception for HTTP errors
            data = response.json()
            
            if 'results' in data and data['results']:
                print(f"Found {len(data['results'])} results on page {page}")
                results.extend(data['results'])
            else:
                print(f"No results found on page {page}")
                
            if page >= data.get('total_pages', 1) or not data.get('results'):
                break  # Stop if no more pages available
            
            page += 1
            
        except requests.exceptions.RequestException as e:
            print(f"Error fetching data: {e}")
            print(f"Response: {response.text if 'response' in locals() else 'No response'}")
            sys.exit(1)
    
    return results[:count]  # Limit to requested count

# Function to fetch genre lists
def fetch_genres(media_type):
    url = f"{BASE_URL}/genre/{media_type}/list?language={language}"
    
    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json;charset=utf-8"
    }
    
    try:
        response = requests.get(url, headers=headers)
        response.raise_for_status()
        data = response.json()
        
        # Create a dictionary mapping genre IDs to genre names
        return {genre["id"]: genre["name"] for genre in data.get("genres", [])}
    except requests.exceptions.RequestException as e:
        print(f"Error fetching genre data: {e}")
        return {}

# Fetch genre mappings
print("Fetching genre data...")
movie_genres = fetch_genres("movie")
tv_genres = fetch_genres("tv")
print(f"Retrieved {len(movie_genres)} movie genres and {len(tv_genres)} TV genres")

# Fetch data
print("Fetching movie data...")
movies = fetch_tmdb_data("movie/top_rated", MOVIE_COUNT)
print(f"Retrieved {len(movies)} movies")

print("Fetching TV show data...")
tv_shows = fetch_tmdb_data("tv/top_rated", TV_COUNT)
print(f"Retrieved {len(tv_shows)} TV shows")

# Check if we got any data
if not movies and not tv_shows:
    print("Error: No data retrieved from API")
    sys.exit(1)

# Format data
output = {
    "movies": [
        {
            "title": movie["title"],
            "overview": movie["overview"],
            "rating": movie["vote_average"],
            "release_date": movie["release_date"],
            "poster_url": f"https://image.tmdb.org/t/p/w500{movie['poster_path']}" if movie.get('poster_path') else "",
            "genres": [movie_genres.get(genre_id, "Unknown") for genre_id in movie.get("genre_ids", [])]
        }
        for movie in movies
    ],
    "tv_shows": [
        {
            "title": show["name"],
            "overview": show["overview"],
            "rating": show["vote_average"],
            "first_air_date": show.get("first_air_date", "Unknown"),
            "poster_url": f"https://image.tmdb.org/t/p/w500{show['poster_path']}" if show.get('poster_path') else "",
            "genres": [tv_genres.get(genre_id, "Unknown") for genre_id in show.get("genre_ids", [])]
        }
        for show in tv_shows
    ]
}

# Print output for debugging
print("\nOutput data:")
print(json.dumps(output, indent=2)[:500] + "..." if len(json.dumps(output)) > 500 else json.dumps(output, indent=2))

# Save data to JSON file
try:
    with open(f"movie-data-{language}.json", "w", encoding="utf-8") as f:
        json.dump(output, f, indent=4, ensure_ascii=False)
    print("\n✅ Data successfully saved to movie-data-{language}.json")
except Exception as e:
    print(f"\nError saving data: {e}")
