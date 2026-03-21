import { useState } from "react";
import { CirclePlus, X } from "lucide-react";
import toast from "react-hot-toast";

const CredentialSubmission = ({ onClose, listing }) => {
  const [newField, setNewField] = useState("");
  const [credentials, setCredentials] = useState([
    { id: 1, type: "email", name: "Email", value: "" },
    { id: 2, type: "password", name: "Password", value: "" },
  ]);

  const handleAddField = () => {
    const name = newField.trim();

    if (!name) {
      toast("Please enter a field name");
      return;
    }

    setCredentials((prev) => [
      ...prev,
      {
        id: Date.now(),
        type: "text",
        name,
        value: "",
      },
    ]);

    setNewField("");
  };

  const handleChange = (id, value) => {
    setCredentials((prev) =>
      prev.map((field) => (field.id === id ? { ...field, value } : field)),
    );
  };

  const handleRemove = (id) => {
    setCredentials((prev) => prev.filter((field) => field.id !== id));
  };

  const handleSubmission = async (e) => {
    e.preventDefault();

    console.log("Submitted credentials:", credentials);
    toast.success("Credentials submitted");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm sm:p-4">
      <div className="flex h-screen w-full max-w-lg flex-col bg-white shadow-2xl sm:h-auto sm:max-h-[90vh] sm:rounded-lg">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-gray-200 p-4">
          <div className="min-w-0 flex-1">
            <h3 className="text-lg font-semibold text-gray-900">
              {listing?.title}
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Adding credentials for{" "}
              <span className="font-medium">{listing?.username}</span> on{" "}
              <span className="font-medium">{listing?.platform}</span>
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="ml-4 rounded-lg p-1 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmission}
          className="flex flex-col gap-4 overflow-y-auto p-4"
        >
          {credentials.map((cred) => (
            <div
              key={cred.id}
              className="grid grid-cols-1 gap-2 sm:grid-cols-[2fr_3fr_auto] sm:items-center"
            >
              <label className="text-sm font-medium text-gray-800">
                {cred.name}
              </label>

              <input
                type={cred.type}
                value={cred.value}
                onChange={(e) => handleChange(cred.id, e.target.value)}
                className="w-full rounded-md border border-gray-300 px-3 py-1.5 text-sm outline-none transition focus:border-primary-dull focus:ring-2 focus:ring-blue-500/20"
              />

              <button
                type="button"
                onClick={() => handleRemove(cred.id)}
                className="flex h-9 w-9 items-center justify-center rounded-md text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          ))}

          {/* Add More Fields */}
          <div className="flex items-center gap-2 pt-2">
            <input
              type="text"
              value={newField}
              onChange={(e) => setNewField(e.target.value)}
              placeholder="Field name here..."
              className="flex-1 border-b border-gray-300 px-1 py-2 text-sm outline-none focus:border-primary-dull"
            />

            <button
              type="button"
              onClick={handleAddField}
              className="flex items-center justify-center rounded-md p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-800"
            >
              <CirclePlus className="h-5 w-5" />
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-4 self-start rounded-md bg-primary-dull px-6 py-2 text-white transition-colors hover:bg-primary"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CredentialSubmission;
