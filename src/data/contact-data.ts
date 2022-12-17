export type ContactType = {
    id: number;
    icon: 'location' | 'phone' | 'email';
    header: string;
    description: string;
}
const ContactData: ContactType[] = [
    { id: 1, icon: 'phone', header: "Phone Number", description: "+971588025480", },
    { id: 2, icon: 'email', header: "Email", description: "diyaa.gubarah@gmail.com", },
    { id: 3, icon: 'location', header: "Map Street", description: "Abu Dhabi, Alfalah St", },
]


export default ContactData