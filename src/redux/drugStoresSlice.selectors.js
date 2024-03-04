export const selectDrugStores = state => state.drugStores.drugStores;

export const selectMedicines = state => state.drugStores.medicines;

export const selectIsLoadingDrugStores = state => state.drugStores.isLoadingDrugStores;

export const selectIsLoadingMedicines = state => state.drugStores.isLoadingMedicines;

export const selectSelectedDrugStore = state => state.drugStores.selectedDrugStore;

export const selectError = state =>
  state.drugStores.error;
