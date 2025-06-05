export const myApplicationsPromise = email => {
    return fetch(`https://job-nest-server-nu.vercel.app/applications?email=${email}`).then(res => res.json());
}
