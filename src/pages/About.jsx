import countryFact from "../api/countryData.json";

export const About=()=>{
    return (
        <section className="section-about container">
            <h2 className="container-title">
                Here are the Interesting Fact <br></br>
                We're Proud of
                
            </h2>

            <div className="gradient-cards">
                {countryFact.map((country)=>{
                    // const {id,capital,population,interestingfact}=country;
                  return (
                <div className="card" key={country.id}>
                    <div className="container-card bg-blue-box">
                        <p className="card-title">{country.countryname}</p>

                        <p>
                            <span className="card-description">Capital:</span>
                            {country.capital}
                        </p>
                        <p>
                            <span className="card-description">Papulation:</span>
                             {country.papulation}
                        </p>
                        <p>
                            <span className="card-descriptin">Interesing Fact:</span>
                           {country.interestingFact}
                        </p>
 
                    </div>
                </div>
                  );
                })
                };
            </div>

        </section>
    )
};