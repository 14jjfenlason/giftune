# GifTune

## Description
GifTune is a web application that allows users to search for music artists or songs and receive detailed information alongside related gifs. Utilizing the Spotify and Giphy APIs, it provides a dynamic and interactive way to explore music and visual content. Built with HTML, CSS, and JavaScript, GifTune leverages Materialize CSS for responsive design elements to enhance user experience on various devices.

## Installation
To run GifTune locally, follow these simple steps:

1. **Clone the repository:**
    ```bash/git bash
    git clone https://github.com/14jjfenlason/giftune.git
    ```

2. **Navigate to the project directory:**
    ```bash/git bash
    cd giftune
    ```

3. **Open the `index.html` file in your web browser.**

No need to install additional dependencies, as the project uses CDN links for all external libraries including Materialize CSS, jQuery, and others.

## Usage
Open `index.html` in your browser. Utilize the search modal to enter an artist's name or song title. The application will fetch and display artist and song information, album art, and a corresponding gif from Giphy related to the search query.

## Features
- **Music and Gif Search**: Leverages the Spotify API for music data and the Giphy API for gif images.
- **Responsive Design**: Uses Materialize CSS for a layout that adjusts to desktops, tablets, and mobiles.
- **Local Storage**: Implements local storage to save and display the history of user searches, enhancing user experience by providing quick access to previous searches.

## Team

GifTune is developed by a team of student developers from UTA Bootcamp. As part of our learning journey, we have come together to create this application, which demonstrates our collective skills in web development and our passion for music and technology.

### Our Developers:
- **Jewel Sunny** - Specializes in frontend development, focusing on UI/UX enhancements using Materialize CSS.
- **Joshua Fenlason** - Handles backend development, ensuring robust API integration and server-side functionality.
- **Max Bonetti** - A full stack developer who ensures that the frontend and backend of the application work seamlessly together.
- **Franc Garcia** - Focuses on quality assurance, responsible for testing and providing critical feedback to improve application reliability and user experience.

## Contributing

We love your input! We want to make contributing to this project as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features

We use GitHub to host code, to track issues and feature requests, as well as accept pull requests.

### How to Contribute:
1. **Fork the repo** and create your branch from `main`.
2. **Clone the repository** to your own machine (same step as installation process)
3. **Switch to the directory** of the cloned repository:
    ```bash/git bash
    cd giftune
    ```
4. **Create a new branch**:
    ```bash/git bash
    git checkout -b name-your-feature
    ```
5. **Make your changes** and commit them:
    ```bash/git bash
    git commit -m 'Add some feature'
    ```
6. **Push your branch** to GitHub:
    ```bash/git bash
    git push origin name-your-feature 
    ```
7. **Open a Pull Request** on GitHub and provide a description of the proposed changes.

Please ensure your commit messages clearly explain the purpose of your changes. This helps maintainers understand your suggestions and make it easier to integrate them.

### Pull Request Process
1. Ensure any install or build dependencies are removed before the end of the layer when doing a build.
2. Update the README.md with details of changes to the interface, this includes new environment variables, exposed ports, useful file locations, and container parameters.
3. Increase the version numbers in any examples files and the README.md to the new version that this Pull Request would represent.
4. The pull request will be merged once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

## Code of Conduct
Please note that this project is released with a Contributor Code of Conduct. By participating in this project you agree to abide by its terms.


## License
This project is released under the MIT License. See the LICENSE file in the project repository for more details.

## Acknowledgments
- **Spotify API**: For providing a robust API to access music data.
- **Giphy API**: For making it easier to add fun and relevant visual content.
- **Materialize CSS**: For their responsive frontend framework that greatly enhances the UI/UX.
