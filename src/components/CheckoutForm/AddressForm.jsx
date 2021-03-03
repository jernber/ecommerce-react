import React, { useState, useEffect } from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core'
import { useForm, FormProvider } from 'react-hook-form'
import { commerce } from '../../lib/commerce'
import FormInput from './CustomTextField'


const AddressForm = ({ checkoutToken }) => {
    const [shippingCountries, setShippingCountries] = useState([])
    const [shippingCountry, setShippingCountry] = useState('')
    const [shippingSubdivisions, setShippingSubdivisions] = useState([])
    const [shippingSubdivions, setshippingSubdivions] = useState('')
    const [shippingOptions, setShippingOptions] = useState([])
    const [shippingOption, setShippingOption] = useState('')

    const methods = useForm()

    const fetchShippingCountries = async (checkoutTokenID) => {
        const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenID)
        setShippingCountries(countries)
        console.log(countries)
    }

    useEffect(() =>{
        fetchShippingCountries(checkoutToken.id)
    }, [])

    return (
       <>
            <Typography variant="h6" gutterBottom>Shipping Address</Typography>
            <FormProvider {...methods}>
                <form onSubmit=''>
                    <Grid container spacing={3}>
                        <FormInput required name='firstName' label='First name'/>
                        <FormInput required name='lastName' label='Last name'/>
                        <FormInput required name='address1' label='Address'/>
                        <FormInput required name='email' label='Email'/>
                        <FormInput required name='city' label='City'/>
                        <FormInput required name='ZIP' label='ZIP / Postal Code'/>

                        {/* <Grid item xs={12} sm={6}>
                            <InputLabnel>Shipping Country</InputLabnel>
                            <Select value={} fullWidth onChange={}>
                                <MenuItem key={} value={}>
                                    Select Me
                                </MenuItem>
                            </Select>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <InputLabnel>Shipping Subdivision</InputLabnel>
                            <Select value={} fullWidth onChange={}>
                                <MenuItem key={} value={}>
                                    Select Me
                                </MenuItem>
                            </Select>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <InputLabnel>Shipping Options</InputLabnel>
                            <Select value={} fullWidth onChange={}>
                                <MenuItem key={} value={}>
                                    Select Me
                                </MenuItem>
                            </Select>
                        </Grid> */}
                    </Grid>
                </form>
            </FormProvider>
       </>
    )
}

export default AddressForm
