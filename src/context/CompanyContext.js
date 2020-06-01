import React, {useState, createContext} from 'react';

export const CompanyContext = createContext(); 

export const CompanyProvider = (props) => {
    const [company, setCompany] = useState([
        {
            name: 'Google',
            location: 'California, USA',
            image_url: 'https://cdn.vox-cdn.com/thumbor/Pkmq1nm3skO0-j693JTMd7RL0Zk=/0x0:2012x1341/1200x800/filters:focal(0x0:2012x1341)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg',
            careers_url: 'https://careers.google.com/jobs/'
        },
        {
            name: 'Amazon',
            location: 'Vancouver, BC',
            image_url: 'https://www.vmastoryboard.com/wp-content/uploads/2014/08/Amazon-Logo_Feature.jpg',
            careers_url: 'https://careers.google.com/jobs/'
        },
        {
            name: 'Microsoft',
            location: 'Seattle, Redmond',
            image_url: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2qVsJ?ver=3f74',
            careers_url: 'https://careers.google.com/jobs/'
        },
        {
            name: 'Facebook',
            location: 'Menlo Park, CA',
            image_url: 'https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2015/07/sdffdsafsdf-1200x604.png',
            careers_url: 'https://careers.google.com/jobs/'
        },
        {
            name: 'Netflix',
            location: 'Vancouver, BC',
            image_url: 'https://assets.brand.microsites.netflix.io/assets/fbd0c908-b388-11e7-9274-06c476b5c346_cm_800w.png?v=34',
            careers_url: 'https://careers.google.com/jobs/'
        },
        {
            name: 'Netflix',
            location: 'Vancouver, BC',
            image_url: 'https://assets.brand.microsites.netflix.io/assets/fbd0c908-b388-11e7-9274-06c476b5c346_cm_800w.png?v=34',
            careers_url: 'https://careers.google.com/jobs/'
        },
        {
            name: 'Netflix',
            location: 'Vancouver, BC',
            image_url: 'https://assets.brand.microsites.netflix.io/assets/fbd0c908-b388-11e7-9274-06c476b5c346_cm_800w.png?v=34',
            careers_url: 'https://careers.google.com/jobs/'
        },
        {
            name: 'Netflix',
            location: 'Vancouver, BC',
            image_url: 'https://assets.brand.microsites.netflix.io/assets/fbd0c908-b388-11e7-9274-06c476b5c346_cm_800w.png?v=34',
            careers_url: 'https://careers.google.com/jobs/'
        },
        {
            name: 'Netflix',
            location: 'Vancouver, BC',
            image_url: 'https://assets.brand.microsites.netflix.io/assets/fbd0c908-b388-11e7-9274-06c476b5c346_cm_800w.png?v=34',
            careers_url: 'https://careers.google.com/jobs/'
        },
        {
            name: 'Netflix',
            location: 'Vancouver, BC',
            image_url: 'https://assets.brand.microsites.netflix.io/assets/fbd0c908-b388-11e7-9274-06c476b5c346_cm_800w.png?v=34',
            careers_url: 'https://careers.google.com/jobs/'
        },
        {
            name: 'Netflix',
            location: 'Vancouver, BC',
            image_url: 'https://assets.brand.microsites.netflix.io/assets/fbd0c908-b388-11e7-9274-06c476b5c346_cm_800w.png?v=34',
            careers_url: 'https://careers.google.com/jobs/'
        },
        {
            name: 'Netflix',
            location: 'Vancouver, BC',
            image_url: 'https://assets.brand.microsites.netflix.io/assets/fbd0c908-b388-11e7-9274-06c476b5c346_cm_800w.png?v=34',
            careers_url: 'https://careers.google.com/jobs/'
        },
        {
            name: 'Netflix',
            location: 'Vancouver, BC',
            image_url: 'https://assets.brand.microsites.netflix.io/assets/fbd0c908-b388-11e7-9274-06c476b5c346_cm_800w.png?v=34',
            careers_url: 'https://careers.google.com/jobs/'
        },
        {
            name: 'Netflix',
            location: 'Vancouver, BC',
            image_url: 'https://assets.brand.microsites.netflix.io/assets/fbd0c908-b388-11e7-9274-06c476b5c346_cm_800w.png?v=34',
            careers_url: 'https://careers.google.com/jobs/'
        },
        {
            name: 'Netflix',
            location: 'Vancouver, BC',
            image_url: 'https://assets.brand.microsites.netflix.io/assets/fbd0c908-b388-11e7-9274-06c476b5c346_cm_800w.png?v=34',
            careers_url: 'https://careers.google.com/jobs/'
        }
    ]);
    return(
        <CompanyContext.Provider value={[company, setCompany]}>
            {props.children}
        </CompanyContext.Provider>
    );
}