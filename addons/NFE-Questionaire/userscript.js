export default async function ({addon, msg, console}) {
    const publishButton = document.querySelectorAll('.menu-bar_menu-bar-item_oLDa-')[1];

    publishButton?.addEventListener("click", () => {
        let violenceSmall = confirm("your project contains violence (small/rare)?\n\nthis don't means\n- death by snowball (may impossible)")
        let violenceLarge = confirm("your project contains violence (large/common)?")
        let violence = violenceSmall || violenceLarge
        let unkidfriendly = confirm("your project contains unkidfriendly content?\n\nthis means\n- horror content\n- too much scary content\n-constants jumpscares")
        let NFERated = violence || unkidfriendly
        if (NFERated) {
            alert("your project will be rated NFE and don't will appears on front page, search results and profile")
            addon.tab.sendMessage("nfe-notifier", {
                violence: violence,
                unkidfriendly: unkidfriendly,
                NFERated: NFERated
                // TODO: add more info
            })
        } else {
            alert("your project will be rated FE")
        }
    })
}