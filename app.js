import { fetchUsers } from './api.js';

/**
 * @param {Users} user 
 * @returns {string}
 */
function createUserCard(user) {
    const { name, email, phone } = user;
    const phoneHTML = phone ? `<span class="font-medium text-slate-700">${phone}</span>` : `<span class="text-slate-400">N/A</span>`;
    const initial = name.charAt(0);

    return `
    <div class="group bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200 relative overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 to-cyan-500"></div>
        <div class="flex items-center justify-between mb-3">
            <div class="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center font-semibold text-slate-700">
                ${initial}
            </div>
            <span class="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 text-slate-600 border border-slate-200">
                Active
            </span>
        </div>

        <h3 class="text-base font-semibold text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors">${name}</h3>
        <p class="text-xs text-slate-500 mb-4 truncate">${email}</p>

        <div class="pt-3 border-t border-slate-100 text-xs text-slate-600 flex items-center justify-between">
            <span class="text-slate-400">Phone:</span>
            ${phoneHTML}
        </div>
    </div>
    `;
}


async function renderUsers() {
    const container = document.getElementById('users-list');
    if (!container) return;

    try {
        const users = await fetchUsers();
        if (users && users.length > 0) {
            container.innerHTML = users.map(user => createUserCard(user)).join('');
        } else {
            container.innerHTML = '<p class="text-slate-500 col-span-full text-center">No users found.</p>';
        }
    } catch (error) {
        console.error('Error rendering users:', error);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    renderUsers();
});