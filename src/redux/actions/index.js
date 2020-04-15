export const REMOVE_FEATURE = 'REMOVE_FEATURE'
export const BUY_ITEM = 'BUY_ITEM'

export const removeFeature = id => ({
    type: REMOVE_FEATURE,
    payload: id
})

export const buyItem = item => ({
    type: BUY_ITEM,
    payload: item
})