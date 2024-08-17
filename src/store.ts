import { create } from "zustand";

interface GameQuery {
	genreId?: number;
	platformId?: number;
	ordering?: string;
	searchQuery?: string;
}

interface GameQueryStore {
	gameQuery: GameQuery;
	setGenreId: (id: number) => void;
	setPlatformId: (id: number) => void;
	setOrdering: (order: string) => void;
	setSearchQuery: (text: string) => void;
	setClear: () => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
	gameQuery: {},
	setPlatformId: (id) =>
		set((store) => ({ gameQuery: { ...store.gameQuery, platformId: id } })),
	setGenreId: (id) =>
		set((store) => ({ gameQuery: { ...store.gameQuery, genreId: id } })),
	setOrdering: (order) =>
		set((store) => ({ gameQuery: { ...store.gameQuery, ordering: order } })),
	setSearchQuery: (text) =>
		set((store) => ({ gameQuery: { ...store.gameQuery, searchQuery: text } })),
	setClear: () => set(() => ({ gameQuery: {} })),
}));

export default useGameQueryStore;
