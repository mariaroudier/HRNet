import React, {  useState,useEffect } from 'react';
import Select from 'react-select';


function CreateSelect({value, options, toCommitSelect}) {
      const [isDisabled, setIsDisabled] = useState(false);
      const [isLoading, setIsLoading] = useState(false);
      const [isRtl, setIsRtl] = useState(false);

      return (
            <>
                  <Select
                  className="basic-single"
                  classNamePrefix="select"
                  isDisabled={isDisabled}
                  isLoading={isLoading}
                  isRtl={isRtl}
                  name="name"
                  options={options}
                  onChange={ (e) => toCommitSelect(e) }
                  closeMenuOnSelect={true}
                  tabIndex={0}
                  role="option"
                  value={value} 
                  />
            </>
      )
}

export default CreateSelect;