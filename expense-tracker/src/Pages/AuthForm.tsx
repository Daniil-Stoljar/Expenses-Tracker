export default function AuthForm() {
  return (
    <div className="grid place-items-center">
      <div className="w-full max-w-sm rounded-xl border p-5">
        <h2 className="text-lg font-semibold mb-4">Login</h2>
        <div className="grid gap-3">
          <input
            placeholder="Email"
            type="email"
            className="border rounded-md px-3 py-2"
          />
          <input
            placeholder="Password"
            type="password"
            className="border rounded-md px-3 py-2"
          />
          <button className="bg-sky-500 text-white rounded-md px-4 py-2">
            Sign in
          </button>
          <button className="border rounded-md px-4 py-2">
            Create account
          </button>
        </div>
      </div>
    </div>
  );
}
