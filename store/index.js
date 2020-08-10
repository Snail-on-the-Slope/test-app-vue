import Vue from "vue";
import Vuex from "vuex";
import { getVehicles } from "@/assets/api/request.js";

Vue.use(Vuex);

const store = () =>
    new Vuex.Store({
        state: {
            vehicles: null,
            vehicleById: null,
            typeVehicles: {},
            error: false,
            nightMod: false
        },
        mutations: {
            changeNightMod(state) {
                state.nightMod = !state.nightMod;
                state.nightMod ?
                    (document.getElementsByTagName("body")[0].style.backgroundColor =
                        "#012345") :
                    (document.getElementsByTagName("body")[0].style.backgroundColor =
                        "#fcfcfc");
            },
            updateVehicles(state, veh) {
                state.vehicles = veh;
                console.log("updateVehicles", state.vehicles)
            },
            updateVehicleById(state, id) {
                state.vehicleById = null;
                state.vehicleById = Object.values(state.vehicles).filter(
                    e => e.id === id
                );
                console.log("updateVehicleById", state.vehicleById)
            },
            updateTypeVehicles(state) {
                Object.values(state.vehicles).forEach(currentValue => {
                    state.typeVehicles[currentValue.type] ?
                        state.typeVehicles[currentValue.type].push(currentValue) :
                        (state.typeVehicles[currentValue.type] = [currentValue]);
                });
                console.log("updateTypeVehicles", state.typeVehicles)
            },
            createVehicles(state, newVeh) {
                state.vehicles.unshift(newVeh);
            }
        },
        actions: {
            async fetchVehicles(ctx) {
                try {
                    console.log("fetchVehicles_1")
                    let veh = await getVehicles();
                    console.log("fetchVehicles_2", veh)
                    ctx.commit("updateVehicles", veh);
                    console.log("fetchVehicles_3")
                        // ctx.commit("updateTypeVehicles");
                } catch (e) {
                    console.log(e);
                    ctx.state.error = true;
                }
            },
            async fetchVehicleById(ctx, id) {
                console.log("fetchVehicleById_1")
                ctx.commit("updateVehicleById", id);
                console.log("fetchVfetchVehicleById_2ehicles_1")
                return ctx.getters.vehicleById ? true : false;
            },
            async fetchVehicleByType(ctx) {
                console.log("fetchVehicleByType");
                ctx.commit("updateTypeVehicles");
            }
        },
        getters: {
            nightMod: s => s.nightMod,
            vehicles: s => s.vehicles,
            error: s => s.error,
            typeNameVehicles: s => Object.keys(s.typeVehicles),
            typeVehicles: s => s.typeVehicles,
            vehiclesByType: s => type => s.typeVehicles[type],
            vehicleById: s => s.vehicleById[0]
        },
        modules: {}
    });

export default store;