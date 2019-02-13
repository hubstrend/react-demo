import React from 'react';

const renderTitle = () => (
    <div 
        style={{
            textAlign: 'center',
            margin: '30px auto'
        }}
    >
        <h3>Contact</h3>
    </div>
)

const renderContext = () => (
    <div 
        style={{
            textAlign: 'center',
            margin: '30px auto'
        }}
    >
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
)

const Contact = () => {
    return (
        <div className="container">
            {renderTitle()}
            {renderContext()}
        </div>
    );
};

export default Contact;