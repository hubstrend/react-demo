

const FormGetStarted = () => {
    return (
        <div className="container-grid">
            <div><h1>Get started today!</h1></div>
            <div className="form-input"><select id="employee_range" name="employee_range" title="Employee Range"><option value="">Number of employees</option><option value="Less than 20">Less than 20</option><option value="20-100">20-100</option><option value="100-200">100-200</option><option value="200-500">200-500</option><option value="More than 500">More than 500</option></select></div>

            <div className="nested-grid">
                <div className="form-input"><input className="small-6 columns firstname" id="first_name" maxLength="40" name="first_name" size="20" type="text" placeholder="First name" required="" /></div>
                <div className="form-input"><input className="small-6 columns lastname" id="last_name" maxLength="80" name="last_name" size="20" type="text" placeholder="Last name" required="" /></div>
            </div>            

            <div className="form-input"><input id="email" maxLength="80" name="email" size="20" type="text" placeholder="Work email address" required="" /></div>
            <div className="form-input"><input id="company" maxLength="40" name="company" size="20" type="text" placeholder="Company name" required="" /></div>

            <div className="nested-grid">
                <div className="form-input"><input className="small-9 columns phone" id="phone" maxLength="12" name="phone" size="20" type="text" placeholder="Phone number" required="" /></div>
                <div className="form-input"><input className="small-3 columns location-state" id="location_state" maxLength="80" name="location_state" size="20" type="text" placeholder="State" required="" /></div>
            </div>
                        
            <div className="form-input"><select id="hdyhau" name="hdyhau" title="How Did You Hear About Us"><option value="">How did you hear about us?</option><option value="Referral">Referral</option><option value="Email">Email</option><option value="Radio">Radio</option><option value="Friends/Family">Friends/Family</option><option value="Office Ninjas">Office Ninjas</option><option value="Facebook">Facebook</option><option value="Google">Google</option><option value="Podcast">Podcast</option><option value="Product Sample">Product Sample</option><option value="Other">Other</option></select></div>
            <div className="form-input"><input type="submit" name="submit" id="ss-submit" value="Get a free sample" /></div>           



            <style jsx>{`
                .container-grid {
                    background-color:#fff;
                    display: grid;
                    grid-template-columns: 100%;
                    
                }

                .nested-grid {
                    display:grid;
                    grid-template-columns: repeat(2, 1fr);
                    grid-column-gap: 1rem;
                }

                .container-grid > div {
                    margin: .5rem;
                }

                .container-grid input,
                .container-grid select
                {
                    background-color:#fff;
                    color: #231f1a;
                    font-size: 1rem;
                    letter-spacing: .03125rem;
                    width: 100%;
                    height: 48px;
                    padding: .25rem .625rem 0 .625rem;
                    border: 1px solid #c0bcbc;
                    border-radius: 3px;
                }



                
            `}</style>
        </div>
    );
};

export default FormGetStarted;