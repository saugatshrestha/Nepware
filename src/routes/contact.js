import { Form, useLoaderData } from "react-router-dom";
import ContactList from "./contactlist";

export async function loader({ params }) {
    return ContactList(params.contactId);
}

export default function MainContact() {
    const contact = useLoaderData();
}