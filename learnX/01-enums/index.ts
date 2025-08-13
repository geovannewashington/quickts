enum ObjectState {
   "Pending",
   "Processing",
   "Completed",
};

let validation: ObjectState = ObjectState.Completed;

if (validation === ObjectState.Completed) {
    console.log("Validation completed.");
}
