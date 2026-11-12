# Zipeng Liu’s academic website

The site uses Jekyll and GitHub Pages.

## Local preview

Use Ruby 3.3.4 and Bundler 2.5.11. The lockfile selects GitHub Pages 232 and Jekyll 3.10.0. From the repository root, check the bundle and start the preview:

    bundle check
    bundle exec jekyll serve --config _config.yml,_config.dev.yml --host 127.0.0.1 --port 4000 --safe --livereload

Run `bundle install` if Bundler reports missing gems. Open [localhost:4000](http://localhost:4000/). Jekyll reads the current working tree, including uncommitted changes. Restart the server after changing a configuration file.

Build with the production configuration using:

    JEKYLL_ENV=production bundle exec jekyll build --safe

The output is in _site. The Git ignore rule and Jekyll configuration exclude the local _reference_private directory.

## Editing content

- _pages contains the main pages. _data/navigation.yml controls the menu.
- _data/research.yml contains the research themes, projects, reports, and figure captions.
- _publications contains one Markdown record per paper. Set citation_date for chronological sorting and featured to show a paper on the homepage.
- _config.yml holds the professional contact and profile links.
- _data/photography.yml sets the order and descriptions of the gallery photographs.
- _data/life.yml sets the photographs, chapters, and captions for Beyond Research.

## Adding a photograph

Keep the original in the ignored _reference_private directory. With Python and Pillow available, run:

    python3 scripts/prepare_photo.py "path/to/private/photo.jpg" new-photo --alt "Describe what is visible"

The command writes a viewing image and responsive thumbnails in images/photography, then prints a YAML entry. It respects the original orientation and frame, converts embedded color profiles to sRGB, and strips metadata from the public copies.

Paste the entry under photos in _data/photography.yml at the position where you want it to appear. Choose a new lowercase slug for each photo. You can add a verified caption, location, or date to the entry. Write dates as quoted YYYY-MM-DD strings. A category can be recorded for future grouping once the labels are agreed.

Preview /photography/ and include the YAML change and the new WebP copies when committing. The originals stay in the ignored directory.

For Beyond Research, add `--gallery life` to the command. It writes the copies to images/life. Paste the entry under `photos` in _data/life.yml and add a `category` matching the chapter title. The chapters follow the order in which their first photographs appear. Add an optional `caption` and preview /life/.
