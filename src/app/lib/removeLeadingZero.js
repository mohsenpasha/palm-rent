export function removeLeadingZero(phone) {
        if (!phone) return phone;
        
        const phoneStr = phone.toString();
        
        if (phoneStr.startsWith('0')) {
            return phoneStr.substring(1);
        }
        
        return phoneStr;
    }