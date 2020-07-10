package io.search

import com.tngtech.archunit.core.importer.ClassFileImporter
import com.tngtech.archunit.core.importer.ImportOption
import com.tngtech.archunit.lang.syntax.ArchRuleDefinition.noClasses
import org.junit.jupiter.api.Test

class ArchTest {

    @Test
    fun servicesAndRepositoriesShouldNotDependOnWebLayer() {

        val importedClasses = ClassFileImporter()
            .withImportOption(ImportOption.Predefined.DO_NOT_INCLUDE_TESTS)
            .importPackages("mono.search")

        noClasses()
            .that()
                .resideInAnyPackage("io.search.service..")
            .or()
                .resideInAnyPackage("io.search.repository..")
            .should().dependOnClassesThat()
                .resideInAnyPackage("..io.search.web..")
        .because("Services and repositories should not depend on web layer")
        .check(importedClasses)
    }
}
