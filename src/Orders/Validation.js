
export const isAdvValid = (values) => {
    let errors = {}
    console.log(values)
    if (!values.addAdvertiser.companyName) {
      errors.companyName = 'Company Name is required'
    }
    if (!values.addAdvertiser.companyWebAdd) {
      errors.companyWebAdd = 'Company Website Address is required'
    }
    if (!values.addAdvertiser.industrialCat ) {
      errors.industrialCat = 'Industrial Category is required'
    }
    if (!values.addAdvertiser.firstName) {
        errors.firstName = 'First Name is required'
    }
    if (!values.addAdvertiser.lastName) {
        errors.lastName = 'Last Name is required'
    }
    console.log(values.addAdvertiser.phone.length)
    if (!values.addAdvertiser.phone ) {
      errors.phone = 'phone number is required'
    } else if(values.addAdvertiser.phone.length !== 10 ) {
      errors.phone = 'Enter valid phone number'
    }
    if (!values.addAdvertiser.email ) {
      errors.email = 'Email address is required'
      
    } else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.addAdvertiser.email)) {
      errors.email = 'Email address is invalid'
    }
    if (!values.addAdvertiser.address) {
        errors.address = 'Address is required'
    }
    if (!values.addAdvertiser.address2) {
        errors.address2 = 'Address line 2 is required'
    }
    if (!values.addAdvertiser.city) {
        errors.city = 'City Name is required'
    }
    if (!values.addAdvertiser.country) {
        errors.country = 'Country Name is required'
    }
    if (!values.addAdvertiser.state) {
        errors.state = 'State/Province is required'
    }
    if (!values.addAdvertiser.postal) {
        errors.postal = 'Postal code is required'
    }
    return errors
  }

  export const isOrderValid = (values) => {
      console.log('order', values)
    let errors = {}
    if (!values.order.advertiser) {
      errors.advertiser = 'Advertiser is required'
    }
    if (!values.order.orderTitle) {
      errors.orderTitle = 'Title is required'
    }
    if (!values.order.orderPreLandPageUR) {
      errors.orderPreLandPageUR = 'Preferred Landing Page URL is required'
    } else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.order.orderPreLandPageUR)) {
      errors.orderPreLandPageUR = 'Preferred Landing Page URL address is invalid'
    }
    if (!values.order.price) {
        errors.price = 'Title is required'
    }
    if (!values.order.budget) {
        errors.budget = 'Budget is required'
    }   
  
    return errors
  }