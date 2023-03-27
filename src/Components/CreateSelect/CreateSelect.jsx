import React, { useState } from 'react';
import Select from 'react-select';


function CreateSelect({options, setSelect}) {
      
      const [isDisabled, setIsDisabled] = useState(false);
      const [isLoading, setIsLoading] = useState(false);
      const [isRtl, setIsRtl] = useState(false);

      
      return (
            <>
                  <Select
                  className="basic-single"
                  classNamePrefix="select"
                  defaultValue={options[0]}
                  isDisabled={isDisabled}
                  isLoading={isLoading}
                  isRtl={isRtl}
                  name="name"
                  options={options}
                  onChange={(e) => setSelect(e.label)}
                  closeMenuOnSelect={true}
                  />
            
                  <div
                  style={{
                  color: 'hsl(0, 0%, 40%)',
                  display: 'inline-block',
                  fontSize: 12,
                  fontStyle: 'italic',
                  marginTop: '1em',
                  }} >
                  </div>
            </>
      )
}

export default CreateSelect;