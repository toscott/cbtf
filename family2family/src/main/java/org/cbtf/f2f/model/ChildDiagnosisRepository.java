package org.cbtf.f2f.model;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "ChildDiagnosis", path = "ChildDiagnosis")
public interface ChildDiagnosisRepository extends CrudRepository<ChildDiagnosis, Integer> {


}