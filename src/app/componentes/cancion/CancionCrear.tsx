export const CancionCrear = () => {
  return (
    <>
      <div className="pt-5 d-flex justify-content-center">
        <div className="col-md-8">
          <form className="row g-3 needs-validation">
            <div className="col-md-6 position-relative">
              <label htmlFor="aut" className="form-label">
                Artista
              </label>
              <input
                type="text"
                className="form-control border border-black"
                id="aut"
                name="aut"
                required
              />
            </div>
            <div className="col-md-6 position-relative">
              <label htmlFor="titu" className="form-label">
                Titulo
              </label>
              <input
                type="text"
                className="form-control border border-black"
                id="titu"
                name="titu"
                required
              />
            </div>
            <div className="col-md-6 position-relative">
              <label htmlFor="fech" className="form-label">
                Album
              </label>
              <input
                type="text"
                className="form-control border border-black"
                id="fech"
                name="fech"
                required
              />
            </div>
            <div className="col-md-6 position-relative">
              <label htmlFor="cat" className="form-label">
                Categoria
              </label>
              <select className="form-select border border-black" id="cat" name="cat" required>
                <option selected disabled value="">
                  Seleccione la categoria
                </option>
                <option>Trap</option>
                <option>Dembow</option>
                <option>Romantica</option>
                <option>Salsa</option>
                <option>Vallenato</option>

              </select>
            </div>

            <div className="col-12">
              <button className="btn btn-primary" type="submit">
                Registrar Cancion
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
