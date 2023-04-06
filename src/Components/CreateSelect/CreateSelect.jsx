import React, {  useState,useEffect } from 'react';
import Select from 'react-select';


function CreateSelect({reset, options, toCommitSelect}) {
      const [isDisabled, setIsDisabled] = useState(false);
      const [isLoading, setIsLoading] = useState(false);
      const [isRtl, setIsRtl] = useState(false);

      const [value, setValue] = useState(null);


      useEffect(() => {
            if(reset === true) {
                  toCommitSelect(value)
            }
      }, [reset])

      return (
            <>
                  <Select
                  //setValue={ () => resetSelect()}
                  className="basic-single"
                  classNamePrefix="select"
                  isDisabled={isDisabled}
                  isLoading={isLoading}
                  isRtl={isRtl}
                  name="name"
                  options={options}
                  onChange={ (e) => setValue(e.label) }
                  closeMenuOnSelect={true}
                  tabIndex={0}
                  role="option"
                  selected={ value}   
                  />
                  {console.log(value)}
                  {/* <div className='masha'
                  style={{
                  color: 'hsl(0, 0%, 40%)',
                  display: 'inline-block',
                  fontSize: 12,
                  fontStyle: 'italic',
                  marginTop: '1em',
                  }} >
                  </div> */}
            </>
      )
}

export default CreateSelect;