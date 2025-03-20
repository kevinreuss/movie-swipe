# activate virtual environment to run python script

source myenv/bin/activate

# movie data

- 1-fetchMovieData.py fetched top 1000 movies and top 1000 series from TMDb and saved them to mediaData.js
- language can be set to "de" or "en"
- this is how the two movie-data-files are made

current problem with I18N:

- the Ids of EN and DE are not the same - same ID maps to different movies or series in EN and DE
