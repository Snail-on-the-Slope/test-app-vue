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
            },
            updateVehicleById(state, id) {
                state.vehicleById = null;
                state.vehicleById = Object.values(state.vehicles).filter(
                    e => e.id === id
                );
            },
            updateTypeVehicles(state) {
                Object.values(state.vehicles).forEach(currentValue => {
                    state.typeVehicles[currentValue.type] ?
                        state.typeVehicles[currentValue.type].push(currentValue) :
                        (state.typeVehicles[currentValue.type] = [currentValue]);
                });
            },
            createVehicles(state, newVeh) {
                state.vehicles.unshift(newVeh);
            }
        },
        actions: {
            async fetchVehicles(ctx) {
                try {
                    let veh = await getVehicles();
                    ctx.commit("updateVehicles", veh);
                    // ctx.commit("updateTypeVehicles");
                } catch (e) {
                    console.log(e);
                    ctx.state.error = true;
                }
            },
            async fetchVehicleById(ctx, id) {
                ctx.commit("updateVehicleById", id);
                return ctx.getters.vehicleById ? true : false;
            },
            async fetchVehicleByType(ctx) {
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