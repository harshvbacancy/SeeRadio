export const DefaultUser = {
    addAdvertiser: {
        companyName: '',
        companyWebAdd: '',
        industrialCat: '',
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        address: '',
        address2: '',
        city: '',
        country: '',
        state: '',
        postal: ''
    },
    order: {
        advertiser: '',
        orderTitle: '',
        orderPreLandPageURL: '',
        price: '',
        description: '',
        targetMarket: '',
        budget:''
    },
    // assets: {
    //     scriptFile: [],
    //     voiceFile: [],
    //     advAssetFile: []
    // }
    
}

export const UserReducer = (user, { type, payload }) => {
    switch (type) {
        case 'UPDATE_ADVERTISER_INFO':
            console.log('payload',payload)
            return {
                addAdvertiser: {
                ...user.addAdvertiser,
                ...payload,
                },
            }
        case 'UPDATE_ORDER_INFO':
            return {
                ...user,
                order: {
                    ...user.order,
                    ...payload,
                },
            }
            
            case 'UPDATE_ASSETS_INFO':
                return {
                    ...user,
                    assets: {
                        ...user.assets,
                        ...payload,
                    },
                }
        default:
            return user
    }
}