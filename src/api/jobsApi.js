export const jobsCreatedByPromise = email => {
    return fetch(`https://job-nest-server-nu.vercel.app/jobs/applications?email=${email}`)
    .then(res => res.json())
}