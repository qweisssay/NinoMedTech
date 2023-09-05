export function validateEmail(email: string): string  {
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.length < 5 && email.length > 255) { 
        return 'Email должен содержать от 5 до 255 символов'
    }
    else if (!emailRegex.test(email)) { 
        return 'Email должен содержать @'
     }
    else return ''
}
export function validateName(name: string): string  {
    if (name.length < 2 ) { 
        return 'Минимальная длина имени 2 символа'
    }
    else return ''
}