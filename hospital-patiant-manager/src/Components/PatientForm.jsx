function PatientForm() {
  return (
    <form>
      <input
        type="text"
    	placeholder="Patient Name"
      />

      <input
        type="number"
        placeholder="Age"
      />

      <input
        type="text"
        placeholder="Department"
      />

      <button type="submit">
        Add Patient
      </button>
    </form>
  );
}

export default PatientForm;