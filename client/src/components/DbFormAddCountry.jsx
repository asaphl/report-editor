import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: auto;
    > * {
        padding: 15px;
        margin: 10px;
    }
`;

function DbFormAddCountry(props) {
    return (
        <div>
            <StyledForm method='post' action='http://localhost:5000/api/add-country'>
                <label for='id'>Country Id:</label>
                <input type='text' id='id' name='id'></input>
                <label for='name'>Country Name:</label>
                <input type='text' id='name' name='name'></input>
                <label for='history'>History:</label>
                <textarea id='history' name='history'></textarea>
                <label for='economy'>economy:</label>
                <textarea id='economy' name='economy'></textarea>
                <label for='geography'>geography:</label>
                <textarea id='geography' name='geography'></textarea>
                <label for='demographics'>demographics:</label>
                <textarea id='demographics' name='demographics'></textarea>
                <label for='gdp'>gdp:</label>
                <textarea id='gdp' name='gdp'></textarea>
                <label for='population'>population:</label>
                <textarea id='population' name='population'></textarea>
                <button>Submit</button>
            </StyledForm>
            
        </div>
    );
}

export default DbFormAddCountry;