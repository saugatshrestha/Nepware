import { Form } from "react-router-dom";

export default function ContactList() {
    const contact = {
        firstName: "Saugat",
        lastName: "Shrestha",
        email: "saugatshrestha28@gmail.com",
        avatar: "https://placekitten.com/g/200/200",
        notes: "I specialize in user interfaces, responsive web design, brand identity",
    };

    return (
        <div id="contactlist">

            <article className="card-team card-contact d-flex align-items-start mb-4 position-relative">
                <figure className="card-team__thumbnail mb-0 overflow-hidden">
                    <img key={contact.avatar} src={contact.avatar || null} className="w-100 h-100 object-fit" alt="Thumbnail"/>
                </figure>
                <div className="card-team__details">
                    <h2>
                        {contact.firstName || contact.lastName ? (
                        <>
                            {contact.firstName} {contact.lastName}
                        </>
                        ) : (
                            <i>No Name</i>
                        )}{" "}
                    </h2>
                    {contact.email && (
                        <p>
                            {contact.email}
                        </p>
                    )}
                    {contact.notes && <p>{contact.notes}</p>}
                    <div className="card-contact__actions">
                        <Form action="edit">
                            <button type="submit">Edit</button>
                        </Form>
                        <Form method="post" action="destroy" onSubmit={(event) => { if ( !prompt("Please confirm you want to delete this record.")) {event.preventDefault();}}}>
                            <button type="submit">Delete</button>
                        </Form>
                    </div>
                </div>
            </article>
        </div>
    );
}