import { getEventById } from "dummy-data";
import { useRouter } from "next/router"
import { Fragment } from "react";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert";

export default function EventDetailPage () {
    const router = useRouter();
    const eventId = router.query.eventId;
    console.log("EVENT ID: ", router.query)
    const event = getEventById(eventId);
    
    if (!event) {
        return (
            <ErrorAlert>
                <p>No event found!</p>
            </ErrorAlert>
        )
    }
    const { title, date, location, image, description } = event;

    return (
        <Fragment>
            <EventSummary title={title} />
            <EventLogistics date={date} address={location} image={image} imageAlt={title} />
            <EventContent>
                <p>{description}</p>
            </EventContent>
        </Fragment>
    )
}