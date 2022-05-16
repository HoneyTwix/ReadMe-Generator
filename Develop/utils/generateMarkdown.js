// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `[Github license](http://img.shields.io/badge/license/${license}-blueviolet.svg)`;
  }
    else{
      var empty = ''
      return empty
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license != "None"){
    return `*[License](#license)`;
  }
    else{
      return '';
    }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != "None"){
    return `## This License Project is protected by ${license} license`;
}
    else {
    return ''
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  *[Installation](#installation)
  *[Usage](#usage)
  ${renderLicenseLink(data.license)}
  *[Contribution Guidelines] (#contributions)
  *[Testing] (#testing)
  *[Questions] (#questions)

  ## Installation
    ${data.installation}

  ## Usage 

  ${data.usage}

  ## Contributions
  ${data.contributing}

  ## Testing
  Use this command to run your tests.
  ${data.tests}

  ## Questions?
  Contact me at ${data.email}, if you have any questions about this repo

  Make sure to look at the other stuff that I created at ${data.github}
`;
}

module.exports = generateMarkdown;
