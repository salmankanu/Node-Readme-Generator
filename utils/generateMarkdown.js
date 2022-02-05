const licences = {
  'CC 4.0 ShareAlike': ['CC BY-SA 4.0', 'https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg', 'https://creativecommons.org/licenses/by-sa/4.0/'],
  'CC 4.0 NonCommercial': ['CC BY-NC 4.0', 'https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg', 'https://creativecommons.org/licenses/by-nc/4.0/'],
  'CC 4.0 NoDivatives': ['CC BY-ND 4.0', 'https://img.shields.io/badge/License-CC%20BY--ND%204.0-lightgrey.svg', 'https://creativecommons.org/licenses/by-nd/4.0/'],
  'Eclipse Public License': ['EPL 1.0', 'https://img.shields.io/badge/License-EPL%201.0-red.svg', 'https://opensource.org/licenses/EPL-1.0'],
  'Open Database License (ODbL)': ['ODbL', 'https://img.shields.io/badge/License-ODbL-brightgreen.svg', 'https://opendatacommons.org/licenses/odbl/'],
  'Public Domain Dedication and License (PDDL)': ['PDDL', 'https://img.shields.io/badge/License-PDDL-brightgreen.svg', 'https://opendatacommons.org/licenses/pddl/'],
  'IBM': ['IPL 1.0', 'https://img.shields.io/badge/License-IPL%201.0-blue.svg', 'https://opensource.org/licenses/IPL-1.0'],
  'MIT': ['MIT', 'https://img.shields.io/badge/License-MIT-yellow.svg', 'https://opensource.org/licenses/MIT'],
  'The Unlicense': ['Unlicense', 'https://img.shields.io/badge/license-Unlicense-blue.svg', 'http://unlicense.org/'],
  'The Do What the Fuck You Want to Public License': ['WTFPL', 'https://img.shields.io/badge/License-WTFPL-brightgreen.svg', 'http://www.wtfpl.net/about/'],

}

// functions that returns licence badge 

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  }
  return licences[license][1];
}

function renderLicenseLink(license) {
  if (!license) {
    return "";
  }
  return licences[license][2];
}

function renderLicenseLabel(license) {
  if (!license) {
    return "";
  }
  return licences[license][0];
}

// function that returns the license section of README
// If there is no license, return an empty strin
function renderLicenseSection(license) {
  if (!license) {
    return "No License";
  }
  const badge = renderLicenseBadge(license);
  const link = renderLicenseLink(license);
  const label = renderLicenseLabel(license);
  
  return `![License: ${label}](${badge})(${link})`;
}

// function to format and generate inputs to be written to file.
function generateMarkdown(data) {
  const userLicense = renderLicenseSection(data.license);
  const contribute = (data.contributeIsDefault) ? "If you would like to contribute to this project, please follow best practices and message me at one of the provided contacts bellow if you want to push!" : data.contributeDesc;
  const education= (data.education) ? "education." : "For Good.";


  return `# ${data.realName} - ${data.projTitle}
  ${data.license} - ${userLicense} - ${education}
  ## Table of Contents:
  - [Project description](#project-description)
  - [Usage instructions](#usage-instructions)
  - [Project installation](#project-installation)
  - [Additional comments](#additional-comments)
  - [Contribution information](#contribution-information)
  - [Questions](#questions-or-concerns)
  ### About This Project
  * # Project description:
    ${data.projDesc}
  * # Usage instructions
    ${data.usage}
  * # Project installation
    ${data.installation}
      
  * # Additional comments
    ${data.comments}
  #### Contribution information 
  - ${contribute}
  ###### Questions or concerns? 
  * Please contact me at one of the following!
    Email - ${data.email}
    gitHub - https://github.com/${data.gitHubName}/
  # Extras
  * Screenshots:
    ![](${data.screenshot})
  * Demo:
    [App demo](${data.demo})
  * Links:
    [Repo page](${data.repo})
  `;
}

// export module
module.exports = generateMarkdown;