<template>
    <section>
        <TheNavigation />
        <TheContactsHeader />
        <TheContactsContent />
        <TheFooter className="extra-padding" />
    </section>
</template>

<script>
    export default {
        head () {
            return {
                title: `Контактная информация Чито-ра`,
            }
        },
    }
</script>