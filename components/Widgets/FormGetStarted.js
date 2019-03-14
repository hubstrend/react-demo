import Link from 'next/link';

const FormGetStarted = () => {
    return (
        <div className="container-grid" id="formGetStarted">
            <div><h1>Get started today!</h1></div>
            <div className="form-input"><select id="employee_range" name="employee_range" title="Employee Range"><option value="">Number of employees</option><option value="Less than 20">Less than 20</option><option value="20-100">20-100</option><option value="100-200">100-200</option><option value="200-500">200-500</option><option value="More than 500">More than 500</option></select></div>

            <div className="nested-grid">
                <div className="form-input margin-r"><input className="small-6 columns firstname" id="first_name" maxLength="40" name="first_name" size="20" type="text" placeholder="First name" required="" /></div>
                <div className="form-input"><input className="small-6 columns lastname" id="last_name" maxLength="80" name="last_name" size="20" type="text" placeholder="Last name" required="" /></div>
            </div>            

            <div className="form-input"><input id="email" maxLength="80" name="email" size="20" type="text" placeholder="Work email address" required="" /></div>
            <div className="form-input"><input id="company" maxLength="40" name="company" size="20" type="text" placeholder="Company name" required="" /></div>

            <div className="nested-grid">
                <div className="form-input margin-r"><input className="small-9 columns phone" id="phone" maxLength="12" name="phone" size="20" type="text" placeholder="Phone number" required="" /></div>
                <div className="form-input"><input className="small-3 columns location-state" id="location_state" maxLength="80" name="location_state" size="20" type="text" placeholder="State" required="" /></div>
            </div>
                        
            <div className="form-input"><select id="hdyhau" name="hdyhau" title="How Did You Hear About Us"><option value="">How did you hear about us?</option><option value="Referral">Referral</option><option value="Email">Email</option><option value="Radio">Radio</option><option value="Friends/Family">Friends/Family</option><option value="Office Ninjas">Office Ninjas</option><option value="Facebook">Facebook</option><option value="Google">Google</option><option value="Podcast">Podcast</option><option value="Product Sample">Product Sample</option><option value="Other">Other</option></select></div>
            
            <div className="form-input"><input type="submit" name="submit" id="ss-submit" value="Get a free sample" /></div>
            
            <div className="divider"><hr/>or<hr/></div>

            <div className="form-input">
                <span className="cta"><Link href="https://calendly.com/naturebox/naturebox-demo"><a>Schedule a call to learn more</a></Link></span>                
            </div>



            <style jsx>{`
               
                


               #formGetStarted {
                    margin-top: 30px;
                    margin-bottom: 50px;
                    display: grid;
                    grid-template-columns: 100%;
                }

                .nested-grid {
                    display:flex;
                    grid-template-columns: repeat(3, 40% 40%);
                    justify-content: center ;
                }

                .margin-r {
                    margin-right: .5rem;
                }

                .container-grid > div {
                    margin: .5rem;
                }


                .form-input select {
                    background: url(/static/images/carrot-down.svg) no-repeat 90% 50%;
                    background-size: 15px;
                    height:49px;
                    padding-left: .625rem;
                    border: 1px solid #b7b4b0;
                    border-radius: 3px;
                    background-color: #fff;
                    color: #231f1a;
                    font-size: 1rem;
                    letter-spacing: .03125rem;
                    appearance: none;

                    width:300px;
                    display: inline-block;
                    margin-bottom:1rem;                    
                }

                .form-input input:not([type=checkbox]){
                    background-color: #fff;
                    border: 1px solid #c0bcbc;
                    border-radius: 3px;
                    color:#231f1a;
                    font-size:1rem;
                    letter-spacing: .03125rem;
                    height: 48px;
                    padding: .25rem .625rem 0 .625rem;

                    width:280px;
                    display: inline-block;
                    margin-bottom:1rem;
                }

                .nested-grid input:not([type=checkbox]){
                    width: 134px;
                    padding-right:0;
                }

                .form-input input[type=submit] {
                    background-color: #ef5e12;
                    border: none;
                    border-radius: .1875rem;
                    color: #fff;
                    font-size: 1rem;
                    height: 3rem;
                    line-height: 1;
                    min-width: 6.25rem;
                    padding: 1rem;
                    text-align: center;

                    width: 300px;
                    display: inline-block;
                    margin-bottom: 1rem;
                }

                /* .form-input span Link {
                    text-decoration: none !important;
                    color: #ef5e12 !important;
                    margin: 15px auto 30px;
                }
                .form-input span a {
                    text-decoration: none !important;
                    color: #ef5e12 !important;
                }
                .form-input .cta {
                    background-color: rgba(0,0,0,0);                    
                    border: none;
                    border-radius: .1875rem;
                    color: #ef5e12 !important;
                    text-decoration: none !important;
                    font-size: 1rem;
                    height: 3rem;
                    line-height: 1;
                    min-width: 6.25rem;
                    padding: 1rem 42px;
                    text-align: center;
                    border: 1px solid #ef5e12;                    
                } */

                #formGetStarted .divider hr{
                    width:128px;
                    color: #e4e0db;
                    background-color: #e4e0db;
                    height:1px;
                    font-size:0;
                    border:0;
                    display: inline-block;
                    margin: 4px;
                }
                #formGetStarted .divider {
                    color: #e4e0db;
                    margin-bottom: 35px;
                }





                /* .container-grid input,
                .container-grid select
                {
                    background-color:#fff;
                    color: #231f1a;
                    font-size: 1rem;
                    letter-spacing: .03125rem;
                    height: 48px;
                    padding: .25rem .625rem 0 .625rem;
                    border: 1px solid #c0bcbc;
                    border-radius: 3px;
                } */



                
            `}</style>
        </div>
    );
};

export default FormGetStarted;