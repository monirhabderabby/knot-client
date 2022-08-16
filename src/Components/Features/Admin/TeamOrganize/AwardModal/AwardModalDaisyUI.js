import React from "react";

const AwardModalDaisyUI = () => {
    return (
        <div>
            <input type="checkbox" id="award" class="modal-toggle" />
            <label for="award" class="modal cursor-pointer">
                <label class="modal-box relative" for="">
                    <h3 class="text-lg font-bold">
                        Congratulations random Internet user!
                    </h3>
                    <p class="py-4">
                        You've been selected for a chance to get one year of
                        subscription to use Wikipedia for free!
                    </p>
                </label>
            </label>
        </div>
    );
};

export default AwardModalDaisyUI;
