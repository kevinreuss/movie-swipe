import requests
import json
import sys

# Replace with your TMDb API Key
API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjFlYjYzY2QyYjI2YTE3NTk0ZjA1OWI4ZjMzZTExYiIsIm5iZiI6MTc0MjQ5MDg4OC43OTYsInN1YiI6IjY3ZGM0ZDA4Nzg5MWE3NjgyYjdmOWZlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iN_eZP0r_Hc6n8I-vVI2b0IYykuQVu3ssAlBMkm5Mgc"
BASE_URL = "https://api.themoviedb.org/3"
language = "de"

# Use headers for authentication
headers = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json;charset=utf-8"
}

def fetch_genres(media_type):
    """Fetch all genres for a specific media type (movie or tv)"""
    url = f"{BASE_URL}/genre/{media_type}/list?language={language}"
    print(f"Fetching {media_type} genres from: {url}")
    
    try:
        response = requests.get(url, headers=headers)
        response.raise_for_status()  # Raise exception for HTTP errors
        data = response.json()
        
        if 'genres' in data and data['genres']:
            print(f"Found {len(data['genres'])} {media_type} genres")
            return data['genres']
        else:
            print(f"No {media_type} genres found")
            return []
            
    except requests.exceptions.RequestException as e:
        print(f"Error fetching {media_type} genre data: {e}")
        print(f"Response: {response.text if 'response' in locals() else 'No response'}")
        return []

# Fetch movie genres
movie_genres = fetch_genres("movie")
if movie_genres:
    # Save movie genres to JSON file
    try:
        with open(f"movie_genres-{language}.json", "w", encoding="utf-8") as f:
            json.dump({"genres": movie_genres}, f, indent=4, ensure_ascii=False)
        print(f"✅ Movie genres successfully saved to movie_genres-{language}.json")
    except Exception as e:
        print(f"Error saving movie genres: {e}")
else:
    print("No movie genres to save")

# Fetch TV show genres
tv_genres = fetch_genres("tv")
if tv_genres:
    # Save TV genres to JSON file
    try:
        with open(f"tv_genres-{language}.json", "w", encoding="utf-8") as f:
            json.dump({"genres": tv_genres}, f, indent=4, ensure_ascii=False)
        print(f"✅ TV genres successfully saved to tv_genres-{language}.json")
    except Exception as e:
        print(f"Error saving TV genres: {e}")
else:
    print("No TV genres to save")

# Print a summary
print("\nSummary:")
print(f"Movie genres: {len(movie_genres)}")
print(f"TV genres: {len(tv_genres)}")

# Print the genres for reference
if movie_genres:
    print("\nMovie Genres:")
    for genre in movie_genres:
        print(f"ID: {genre['id']}, Name: {genre['name']}")

if tv_genres:
    print("\nTV Genres:")
    for genre in tv_genres:
        print(f"ID: {genre['id']}, Name: {genre['name']}")