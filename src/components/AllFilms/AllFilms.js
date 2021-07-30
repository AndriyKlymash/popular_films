import SingleFilm from "../SingleFilm/SingleFilm";

export default function AllFilms({films}) {

    return (
        <div>
            <div className='popularFilms'>
                {
                    films?.map(value => <SingleFilm
                        key={value.id}
                        item={value}
                    />)
                }
            </div>
        </div>
    );
}