
export function formatPrice(priceString: string, quantity?: number){ 
    const price = quantity ? Number(priceString) * quantity : Number(priceString)

    return Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(price).split(',')[0].replace(/\s/g,'')
}