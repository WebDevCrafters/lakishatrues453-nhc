
function handleText(data) {

    // Home Page: 
    $(function () {
        $(".first").text(data.navbar.brandName)
        $(".second").text(data.navbar.brandSubHeading)
        $(".banner").text(data.banner.imageCaption)
    })

    // Experience Section
    $(function () {
        $(".experience-heading").text(data.experience.heading)
        $(".experience-content").text(data.experience.content)
    })

    // Features Section
    $(function () {
        $(".heading_1").text(data.features.heading_1)
        $(".heading_2").text(data.features.heading_2)
        $(".heading_3").text(data.features.heading_3)
        $(".content_1").text(data.features.content_1)
        $(".content_2").text(data.features.content_2)
        $(".content_3").text(data.features.content_3)
    })

    // What we do Section
    $(function () {
        $(".what-we-do-heading").text(data.whatWeDo.heading)
        $(".what-we-do-content").text(data.whatWeDo.content)
    })

    // Who are we Section
    $(function () {
        $(".who-are-we-heading").text(data.whoAreWe.heading)
        $(".who-are-we-content").text(data.whoAreWe.content)
    })

    // Our Services Section
    $(function () {
        $(".service-heading").text(data.ourServices.heading)
        $(".service-1").text(data.ourServices.service_1)
        $(".service-2").text(data.ourServices.service_2)
        $(".service-3").text(data.ourServices.service_3)
        $(".service-4").text(data.ourServices.service_4)
        $(".service-5").text(data.ourServices.service_5)
        $(".service-6").text(data.ourServices.service_6)
        $(".service-7").text(data.ourServices.service_7)
        $(".service-8").text(data.ourServices.service_8)
        $(".service-9").text(data.ourServices.service_9)
    })

    // Contacts Section
    $(function () {
        $(".contacts-heading").text(data.contacts.heading)
        $(".contacts-content").text(data.contacts.content)
    })

    // Footer Section
    $(function () {
        $(".footer-brand-name").text(data.footer.brandName)
        $(".footer-address").text(data.footer.address)
        $(".footer-telephone").text(data.footer.phone)
        $(".footer-email").text(data.footer.emailInfo)
        $(".footer-copyright").text(data.footer.copyRight)
    })

    // About Page
    $(function () {
        $(".about-us-heading").text(data.aboutUs.heading)
        $("#about-us-content").text(data.aboutUs.content)
    })

    // Our Mission Section
    $(function () {
        $(".our-mission-heading").text(data.ourMission.heading)
        $(".our-mission-content").text(data.ourMission.content)
    })

    // Our Vision Section
    $(function () {
        $(".our-vision-heading").text(data.ourVision.heading)
        $(".our-vision-content").text(data.ourVision.content)
    })

    // Core Value Section
    $(function () {
        $(".core-value-heading").text(data.coreValue.heading)
        $(".core-value-1").text(data.coreValue.coreValue_1)
        $(".core-value-2").text(data.coreValue.coreValue_2)
        $(".core-value-3").text(data.coreValue.coreValue_3)
        $(".core-value-4").text(data.coreValue.coreValue_4)
        $(".core-value-5").text(data.coreValue.coreValue_5)
        $(".core-value-6").text(data.coreValue.coreValue_6)
        $(".core-value-7").text(data.coreValue.coreValue_7)
        $(".core-value-8").text(data.coreValue.coreValue_8)
        $(".core-value-9").text(data.coreValue.coreValue_9)
        $(".core-value-10").text(data.coreValue.coreValue_10)
    })

    // Services Page:
    $(function () {
        $(".services-heading").text(data.services.brandName)
        $(".services-content").text(data.services.subHeading)
    })

    // Personal Care Section:
    $(function () {
        $(".personalCare-heading").text(data.personalCare.heading)
        $(".personalCare-content").text(data.personalCare.content)
    })

    // Companion Service Section:
    $(function () {
        $(".companionService-heading").text(data.companionService.heading)
        $(".companionService-content").text(data.companionService.content)
    })

    // Light HouseKeeping Section:
    $(function () {
        $(".lightHourseKeeping-heading").text(data.lightHourseKeeping.heading)
        $(".lightHourseKeeping-content").text(data.lightHourseKeeping.content)
    })

    // Meal Preparation Section:
    $(function () {
        $(".mealPreparation-heading").text(data.mealPreparation.heading)
        $(".mealPreparation-content").text(data.mealPreparation.content)
    })

    // Transportation Section:
    $(function () {
        $(".tansportation-heading").text(data.tansportation.heading)
        $(".tansportation-content").text(data.tansportation.content)
    })

    //  Respite Care Section:
    $(function () {
        $(".respiteCare-heading").text(data.respiteCare.heading)
        $(".respiteCare-content").text(data.respiteCare.content)
    })

    // Specialized Care Section:
    $(function () {
        $(".specializedCare-heading").text(data.specializedCare.heading)
        $(".specializedCare-content").text(data.specializedCare.content)
    })

    // Carrers Page:
    $(function () {
        $(".line-1").text(data.carrers.line_1)
        $(".line-2").text(data.carrers.line_2)
        $(".carrer-content").text(data.carrers.content)
        $(".step-1").text(data.carrers.step_1)
        $(".step-2").text(data.carrers.step_2)
        $(".step-3").text(data.carrers.step_3)
        $("#last-content").text(data.carrers.last_content)
    })

}

handleText(textJson)