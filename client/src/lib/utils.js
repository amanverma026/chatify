export function formateMessageTime(date){
    return new Date(date).toLocaleTimeString("en-US",{
        hours:'2-digit',
        minute:'2-digit',
        hour12:false,
    });
}