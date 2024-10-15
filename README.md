## NOTE: This application is not mobile responsive (you can use desktop mode on chrome to view on your mobile device )

Live link [page](https://vercel.live/link/hotel-paradise-website-xi.vercel.app?via=project-dashboard-alias-list&p=1)

## Goal/Requirements📝

### To develop a customer facing website for 'Hotel-Paradise' where the user can book their cabins from the listed cabins

## Necessary Features

- Users of the app are potential guests and actual guests
- Guests should be able to learn all about the Hotel Paradise
- Guests should be able to get information about each cabin and see booked dates
- Guests should be able to filter cabins by their maximum guest capacity
- Guests should be able to reserve a cabin for a certain date range
- Reservations are not paid online. Payments will be made at the property upon arrival. Therefore,
  new reservations should be set to “unconfirmed” (booked but not yet checked in)
- Guests should be able to view all their past and future reservations
- Guests should be able to update or delete a reservation
- Guests need to sign up and log in before they can reserve a cabin and perform any operation
- On sign up, each guest should get a profile in the DB
- Guests should be able to set and update basic data about their profile to make check-in at the

## Technology Decisions💻

| Framework                   | Next.js (RSC Architecture)                                   |
| --------------------------- | ------------------------------------------------------------ |
| **Styling**                 | **Tailwind CSS**                                             |
| **Remote state management** | **Server Actions in Next.js**                                |
| **UI state management**     | **Context API**                                              |
| **Backend**                 | **Supabase + SQL database**                                  |
| **Other packages**          | **React icons / React toast / Recharts / date-fns , etc...** |
