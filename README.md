# Component Library 

Showcasing my ability to use components for reusable code in production. Presented with storybook, a popular tool used to present code in an easy and navigatable UI. 


## View the Demo
Visit my GitHub [page](https://jpadillacoding.github.io/Component-Library/?path=/story/button--primary). Featuring Storybook's UI. 

## Getting started

I wanted to build my way up on each step since this was all very new to me. I started simple- just making components with props that call CSS classes for variability in my attributes. Color, text, and size were my main target for variability. A more complex but efficient approach for making components is using conditionals. Using conditionals is easier to read since it shows exactly what attributes are being added 
```
    let classList = "";
    let types = ["primary","danger","success","warning"];

    if (types.includes(props.type)) {
        classList += ` button-${props.type}`
    }
```
## Challenges 

1. Making an input form with a button was difficult to match on sizing since it was putting together two different components. Because of this, I only used the input form and made the button specifically for the `inputButton` component.
2. Getting Storybook to work was difficult since NodeJS has gotten a lot of updates and some things didn't install correctly despite multiple tries. 
    * Node had to be downgraded to 16.10.0 since Storybook hasn't come out with an update to support the current version of NodeJS. 
    * Storybook's installer wasn't installing the script `"build-storybook": "build-storybook"`. It took me a while to figure this out, but I kept getting an error code of "script not found". Upon review of a random repository on GitHub, I noticed the difference in scripts and added what was missing. 
    * Using [Storybook deployer](https://github.com/storybook-eol/storybook-deployer) gave my Github page the storybook UI. Unfortunately, this triggered google's phishing alert and gave all of my GH Pages the red threat screen. This was easily resolved by contacting Google support for a review of my case. 

## Built With

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
<a href="https://github.com/storybooks/storybook" target="_blank"><img src="https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg"></a>

## Contact 

Jose Padilla - Jose.apadilla99@gmail.com

Project link - [Component Library](https://github.com/JpadillaCoding/Component-Library)



## Acknowledgments

  - Hat tip to anyone whose code is used
  - [Badges/shields](https://github.com/alexandresanlim/Badges4-README.md-Profile)
