import React, { useEffect } from 'react'
import CV from 'react-cv'
import { connect } from 'react-redux'

const Mycv = (props) => {
    const {user} = props
    const linkedin = user.linkedin || '-'
    const twitter = user.twitter || '-'
    const github = user.github || '-'
    const name = user.name || '-'
    const surname = user.surname || '-'
    const email = user.email || '-'
    const career = user.career || '-'
    const tecrube = user.tecrube || '-'
    const languageList = []
    const abilityList = []
    const university = user.university || '-'
    const fakulte = user.fakulte || '-'
    const work = user.work || '-'
    const city = user.city || '-' 
    const phone = user.phone || '-'

    console.log(user.language)
    if(user.language){
        user.language.forEach(lan => {
            languageList.push({
                authority: lan,
            })
        })
    }
    if( user.ability){
        user.ability.forEach(abi => {
            abilityList.push(abi)
        })
    }
    useEffect(() => {document.documentElement.scrollTop = 10},[])
    
    
  return (
    <div>
        <CV 
        personalData = {{
        name: `${name} ${surname}`,
        title: work,
        image: 'https://bulma.io/images/placeholders/128x128.png',
        contacts: [
            { type: 'email', value: email },
            { type: 'phone', value: phone },
            { type: 'location', value: city },
            { type: 'linkedin', value: linkedin },
            { type: 'twitter', value: twitter },
            { type: 'github', value : github }
        ]
        }}
        sections = {[
        {
            type: 'text',
            title: 'Career Profile',
            content: career,
            icon: 'usertie'
        },
        {
            type: 'common-list',
            title: 'Education',
            icon: 'graduation',
            items: [
            {
                title: fakulte,
                authority: university,
            }
            ]
        },
        {
            type: 'experiences-list',
            title: 'Experiences',
            icon: 'archive',
            items: [
            {
                title: tecrube,
                // company: 'Some Company Example INC',
                // description: 'I\'m working as a lead developer yeeeey!',
                // companyWebSite: 'http://somecompanyexample.com',
                // companyMeta: '',
                // datesBetween: '2017.10 - Present',
                // descriptionTags: ['Javascript', 'React']
            },
            // {
            //     title: 'Software Developer',
            //     company: 'Some Company Example INC',
            //     description: 'I\'m using ReactJS and working as a front-end developer',
            //     companyWebSite: 'http://somecompanyexample.com',
            //     companyMeta: 'Little info about company',
            //     datesBetween: '2016.8 - 2017.10'
            // },
            // {
            //     title: 'Intern',
            //     company: 'Some Software Example INC',
            //     description: 'I was warming up.',
            //     companyWebSite: 'http://someexamplecompany.com',
            //     companyMeta: 'SF USA',
            //     datesBetween: '2012.06 - 2012.10'
            // }
            ]
        },
        // {
        //     type: 'common-list',
        //     title: 'Conferences & Certificates',
        //     description: '',
        //     icon: 'comments',
        //     items: [
        //     {
        //         title: 'Some Conferences / 2019',
        //         authority: 'SomeConf',
        //         authorityWebSite: 'https://www.someconf.somesome'
        //     },
        //     {
        //         title: 'Some Conferences / 2019',
        //         authority: 'SomeConf',
        //         authorityMeta: 'Speaker',
        //         authorityWebSite: 'https://www.someconf.somesome',
        //         rightSide: 'test'
        //     },
        //     {
        //         title: 'Some Conferences / 2012',
        //         authorityMeta: 'Speaker'
        //     }
        //     ]
        // },
        {
            type: 'common-list',
            title: 'Languages',
            icon: 'language',
            items: languageList
        },
        {
            type: 'tag-list',
            title: 'Skills Proficiency',
            icon: 'rocket',
            items: abilityList
        }
        // ,
        // {
        //     type: 'tag-list',
        //     title: 'Hobbies & Interests',
        //     icon: 'cubes',
        //     items: ['Photography', 'Poetry']
        // }
        ]
        }
        branding = {false}
     />
    </div>
  )
}

const mapStatetoProps = (state) => ({
    user : state.authReducer
})

export default connect(mapStatetoProps)(Mycv)
