import { useEffect, useState } from "react";
import { getShoppingCart } from "../../assets/utilities/fakedb";


const AppliedJobsLoader = async () => {
    const loaderJobs = await fetch('feature.json');
    const jobs = await loaderJobs.json();

    //If the data is in the database, you have to use async await

    const storedJobs = getShoppingCart();
    console.log(storedJobs)
    const savedJobs = [];
    // for (const id in storedJobs) {
    //     const addedJobs = jobs.find(job => job.id === id);
    //     if (addedJobs) {
    //         const totalQuantity = storedJobs[id];
    //         addedJobs.quantity = totalQuantity;
    //         savedJobs.push(addedJobs);
    //     }
    // }
    // return savedJobs;
}

export default AppliedJobsLoader;