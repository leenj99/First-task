/**
 * @typedef {import('./types.ts').Users} Users
 */

/**

 * @returns {Promise<Users[]>}
 */
export async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }
        /** @type {Users[]} */
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching users:', error);
        return [];
    }
}