export async function postData(url = '', data = {}) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        // چک کردن status response
        if (!response.ok) {
            throw new Error(`خطا در دریافت پاسخ: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('خطا در ارسال داده:', error);
        throw error;
    }
}