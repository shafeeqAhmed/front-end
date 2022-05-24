import { ref, watch, computed } from '@vue/composition-api'
import { useRouter } from '@core/utils/utils'
import { save, remove, get, updateRegisterStep } from '@/auth/utils'
import router from "@/router";

export default function useAuthLogic() {
    const dialCode = ref('');
    const phone_no = ref('');
    const role = ref('client');
    const first_name = ref("");
    const last_name = ref("");
    const userEmail = ref("");
    const password = ref("");
    const password_confirmation = ref("");
    const isDisabled = ref(false);



    const authMenu = ref([
        {
            step: 1,
            key: 'auth-account-type',
            val: true
        },
        {
            step: 2,
            key: 'auth-account-basic-info',
            val: false
        },
        {
            step: 3,
            key: 'email-not-verified',
            val: false
        },
        {
            step: 4,
            key: 'set-2fa',
            val: false
        },
        {
            step: 5,
            key: 'auth-2fa',
            val: false
        },
        {
            step: 6,
            key: 'registration-completed',
            val: false
        },

    ]);
    const getMenuVal = (key) => {

        const index = authMenu.value.findIndex(object => {
            return object.key === key;
        });
        return authMenu.value[index].val
    };
    const getCurrentStepRoute = (step) => {

        const index = authMenu.value.findIndex(object => {
            return object.step === step;
        });
        return authMenu.value[index].key
    };
    const getCurrentRouteStep = (routeName) => {

        const index = authMenu.value.findIndex(object => {
            return object.key === routeName;
        });
        return authMenu.value[index].step
    };

    const updateMenu = () => {
        const { route } = useRouter()
        const MenuIndex = authMenu.value.findIndex(object => {
            return object.key === route.value.name;
        });
        authMenu.value.forEach((element, index) => {
            if (index <= MenuIndex) {
                element.val = true
            }
        });
    }

    const assignRole = (selectedRole) => {
        save('role', selectedRole)
        role.value = selectedRole
        updateRegisterStep(2)
        router.push({ name: 'auth-account-basic-info' })

    }


    return {
        isDisabled,
        dialCode,
        phone_no,
        role,
        authMenu,
        first_name,
        last_name,
        userEmail,
        password,
        password_confirmation,
        getMenuVal,
        updateMenu,
        assignRole,
        getCurrentStepRoute,
        getCurrentRouteStep,
    }
}