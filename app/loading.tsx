export default function Loading() {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="text-center">
  
          <div className="mx-auto h-16 w-16 animate-spin rounded-full border-4 border-green-600 border-t-transparent"></div>
  
          <h2 className="mt-6 text-2xl font-bold text-green-700">
            Memuat Data...
          </h2>
  
          <p className="mt-2 text-gray-600">
            Mohon tunggu sebentar.
          </p>
  
        </div>
      </main>
    );
  }